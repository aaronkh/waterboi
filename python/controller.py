import requests
from time import sleep
import serial

ser = serial.Serial('/dev/cu.usbmodem14401', 9600)
sleep(1)
# ser.setDTR(True)

url = "https://fbsf-2019.appspot.com/state"
last_state = False

while True:
    try:
        r = requests.get(url)
        r = r.json()
        print(r['isDispensing'])
        if last_state != r['isDispensing']:
            last_state = r['isDispensing']
            print(str(int(last_state)))
            ser.write(str(int(last_state)).encode())

    except:
        pass

    sleep(1)
