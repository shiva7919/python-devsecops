/* ============================================================
   INTERACTIVE TERMINAL PREVIEW (Apple-Style macOS Widget)
   ============================================================ */

const DEMO_SCRIPTS = {
  log_parser: {
    filename: 'log_parser.py',
    title: 'SIEM & Log Analyzer',
    code: `<span class="tok-com"># Parse auth.log for suspicious SSH login attempts</span>
<span class="tok-kw">import</span> re, json

<span class="tok-kw">def</span> <span class="tok-fn">audit_ssh_attempts</span>(log_data):
    failed_ips = {}
    <span class="tok-kw">for</span> line <span class="tok-kw">in</span> log_data.splitlines():
        <span class="tok-kw">if</span> <span class="tok-str">"Failed password"</span> <span class="tok-kw">in</span> line:
            ip = re.search(<span class="tok-str">r'from (\\d+\\.\\d+\\.\\d+\\.\\d+)'</span>, line).group(<span class="tok-num">1</span>)
            failed_ips[ip] = failed_ips.get(ip, <span class="tok-num">0</span>) + <span class="tok-num">1</span>
    <span class="tok-kw">return</span> json.dumps(failed_ips, indent=<span class="tok-num">2</span>)

print(audit_ssh_attempts(sample_logs))`,
    logs: [
      { text: '[INIT] Reading /var/log/auth.log stream...', type: 'info', delay: 100 },
      { text: '[SEARCH] Pattern regex match: "Failed password for root"', type: 'info', delay: 400 },
      { text: '[ALERT] 192.168.1.105 -> 14 failed attempts detected!', type: 'warn', delay: 800 },
      { text: '[SECURITY] Triggering automated iptables drop rule...', type: 'alert', delay: 1200 },
      { text: '{\n  "192.168.1.105": 14,\n  "10.0.4.88": 3\n}', type: 'success', delay: 1600 },
      { text: '✓ Execution complete in 12ms. Zero memory leak detected.', type: 'info', delay: 1900 }
    ]
  },
  k8s_health: {
    filename: 'k8s_health.py',
    title: 'Kubernetes Pod Sentinel',
    code: `<span class="tok-com"># Monitor pod restart counts & memory usage</span>
<span class="tok-kw">from</span> kubernetes <span class="tok-kw">import</span> client, config

<span class="tok-kw">def</span> <span class="tok-fn">check_cluster_health</span>(namespace=<span class="tok-str">"prod-sec"</span>):
    v1 = client.CoreV1Api()
    pods = v1.list_namespaced_pod(namespace)
    <span class="tok-kw">for</span> p <span class="tok-kw">in</span> pods.items:
        restarts = p.status.container_statuses[<span class="tok-num">0</span>].restart_count
        <span class="tok-kw">if</span> restarts > <span class="tok-num">5</span>:
            <span class="tok-fn">trigger_pagerduty</span>(p.metadata.name, restarts)

check_cluster_health()`,
    logs: [
      { text: '[K8S] Authenticating with service account token...', type: 'info', delay: 100 },
      { text: '[QUERY] Fetching pods in namespace: "prod-sec"', type: 'info', delay: 350 },
      { text: '[CHECK] auth-api-pod-7d9f... Restarts: 0 [OK]', type: 'success', delay: 650 },
      { text: '[CHECK] redis-cache-pod-0... Restarts: 12 [CRITICAL]', type: 'alert', delay: 1000 },
      { text: '[DISPATCH] Alert sent to PagerDuty #INC-88912', type: 'warn', delay: 1400 },
      { text: '✓ Cluster health check finished: 1 pod requires attention.', type: 'info', delay: 1800 }
    ]
  },
  docker_monitor: {
    filename: 'docker_cleanup.py',
    title: 'Docker Cleanup Engine',
    code: `<span class="tok-com"># Automated Docker image & dangling container prune</span>
<span class="tok-kw">import</span> docker

<span class="tok-kw">def</span> <span class="tok-fn">prune_stale_containers</span>(max_age_hours=<span class="tok-num">24</span>):
    cli = docker.from_env()
    pruned = cli.containers.prune(filters={<span class="tok-str">'until'</span>: f<span class="tok-str">'{max_age_hours}h'</span>})
    reclaimed = pruned.get(<span class="tok-str">'SpaceReclaimed'</span>, <span class="tok-num">0</span>) / (<span class="tok-num">1024</span>**<span class="tok-num">2</span>)
    print(f<span class="tok-str">"Reclaimed {reclaimed:.2f} MB disk space"</span>)

prune_stale_containers()`,
    logs: [
      { text: '[DOCKER] Connecting to Unix socket /var/run/docker.sock', type: 'info', delay: 100 },
      { text: '[INSPECT] Scanning for containers exited > 24 hours ago...', type: 'info', delay: 400 },
      { text: '[PRUNE] Removed container d98a72c1 (ci-runner-build-42)', type: 'warn', delay: 800 },
      { text: '[PRUNE] Removed image sha256:f12a00... (unreferenced)', type: 'warn', delay: 1100 },
      { text: 'Reclaimed 1420.50 MB disk space', type: 'success', delay: 1500 },
      { text: '✓ Disk usage reduced below threshold (64% used).', type: 'info', delay: 1800 }
    ]
  }
};

let currentTab = 'log_parser';
let isRunning = false;

function renderTerminalWidget() {
  const mount = document.getElementById('terminal-preview-widget');
  if (!mount) return;

  mount.innerHTML = `
    <div class="mac-window">
      <div class="mac-window__header">
        <div class="mac-dots">
          <span class="dot dot--red"></span>
          <span class="dot dot--yellow"></span>
          <span class="dot dot--green"></span>
        </div>
        <div class="mac-tabs">
          <button class="mac-tab ${currentTab === 'log_parser' ? 'is-active' : ''}" onclick="switchTerminalTab('log_parser')">log_parser.py</button>
          <button class="mac-tab ${currentTab === 'k8s_health' ? 'is-active' : ''}" onclick="switchTerminalTab('k8s_health')">k8s_health.py</button>
          <button class="mac-tab ${currentTab === 'docker_monitor' ? 'is-active' : ''}" onclick="switchTerminalTab('docker_monitor')">docker_cleanup.py</button>
        </div>
        <button class="mac-run-btn" id="run-terminal-script" onclick="executeDemoScript()">
          <span class="run-icon">▶</span> Run Code
        </button>
      </div>

      <div class="mac-window__body">
        <div class="code-preview-pane">
          <pre><code id="mac-code-content">${DEMO_SCRIPTS[currentTab].code}</code></pre>
        </div>

        <div class="terminal-output-pane" id="terminal-console">
          <div class="console-header">
            <span class="status-dot"></span> Interactive Output Console
            <span class="console-hint">Click "Run Code" above to execute script live</span>
          </div>
          <div class="console-logs" id="console-logs-list">
            <div class="log-line log-line--info">[SYSTEM] Engine ready. Select a script tab and click ▶ Run Code.</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

window.switchTerminalTab = function(tabId) {
  if (isRunning || !DEMO_SCRIPTS[tabId]) return;
  currentTab = tabId;
  renderTerminalWidget();
};

window.executeDemoScript = function() {
  if (isRunning) return;
  isRunning = true;

  const runBtn = document.getElementById('run-terminal-script');
  const consoleList = document.getElementById('console-logs-list');
  if (!runBtn || !consoleList) return;

  runBtn.disabled = true;
  runBtn.classList.add('is-running');
  runBtn.innerHTML = `<span class="spinner"></span> Running...`;

  consoleList.innerHTML = `<div class="log-line log-line--info">[EXEC] Initializing Python 3.11 virtual environment...</div>`;

  const scriptData = DEMO_SCRIPTS[currentTab];
  let maxTime = 0;

  scriptData.logs.forEach(log => {
    maxTime = Math.max(maxTime, log.delay);
    setTimeout(() => {
      const line = document.createElement('div');
      line.className = `log-line log-line--${log.type} fade-in-line`;
      line.innerText = log.text;
      consoleList.appendChild(line);
      consoleList.scrollTop = consoleList.scrollHeight;
    }, log.delay);
  });

  setTimeout(() => {
    isRunning = false;
    runBtn.disabled = false;
    runBtn.classList.remove('is-running');
    runBtn.innerHTML = `<span class="run-icon">▶</span> Run Code`;
  }, maxTime + 300);
};

document.addEventListener('DOMContentLoaded', () => {
  renderTerminalWidget();
});
