import os
import requests
import subprocess
import time

def healthChecker():
  # check status
  url = os.environ["URL"]
  interval = os.environ["INTERVAL"]
  command = os.environ["COMMAND"]
  code = os.environ["CODE"]
  commandWithArgs = command.split(",")

  while True:
    response = requests.get(url)

    if response.status_code == int(code):
      print("It's dead")
      subprocess.run(commandWithArgs)
    else:
      print("It's alive")

    time.sleep(int(interval))

if __name__ == "__main__":
  healthChecker()