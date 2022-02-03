# 루트 노드로써, 필요한 데이터가 다 올때까지 기다리다가 다 도착하면 FINISH 와 함께 받은 데이터들을 출력하고,
# 다음 데이터를 또 받기 위해 가지고 있는 데이터 dict 를 다시 초기화해준다.
import json
import random
import threading
import time
from ast import literal_eval
import requests
self_adr=0
data_range = [1, 2]  # 보낼 수 있는 data 의 최솟값, 최댓값-1 이다.


class SendData(threading.Thread):
    def __init__(self, sec):
        super().__init__()
        self.sec = sec  # thread 이름 지정

    def run(self):
        time.sleep(self.sec)
        send()


def send():
    print("dd")
    data = int(random.random() * (data_range[1] - data_range[0]) + data_range[0])
    send_api({"content": data, "serial-num": self_adr})
    thread_send = SendData(2)
    thread_send.start()


def send_api(body):
    API_HOST = "http://127.0.0.1:5000/"
    url = API_HOST
    body = body
    try:
        headers = {'Content-Type': 'application/json', 'charset': 'UTF-8', 'Accept': '*/*'}
        requests.post(url, headers=headers, data=json.dumps(body, ensure_ascii=False, indent="\t"))
    except Exception as ex:
        print(ex)


def iot_energy(self_adr_r, range1, range2):
    global self_adr
    self_adr=self_adr_r
    data_range[0] = range1
    data_range[1] = range2
    thread_send = SendData(2)
    thread_send.start()


if __name__ == "__main__":
    iot_energy(3, 1,2)