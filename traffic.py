# wap to check the traffic light color

light = input("Enter the traffic light color: ")

if light == "red":
    print("Stop")
elif light == "yellow":
    print("Wait")
elif light == "green":
    print("Go")
else:
    print("Invalid color")  