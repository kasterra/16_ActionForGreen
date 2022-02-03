# main 실행 파일
# 사용자에게서 입력값을 받아 자료구조를 만들고
# 그것을 토대로 각 노드 별 소켓을 만들어서 할당해준다.
import multiprocessing
import os
import iot_energy
import adjust_db
import queue
import sys
import sqlite3
import time
import configparser
import socket
import json
start_time = time.time()  # 프로그램을 실행한지 시간이 얼마나 지났는지 알려주기 위한 시작 시간
num_of_child = []  # 각 노드의 자식 수
child_node = []  # 각 노드의 자식 노드들의 index
parent_node = []  # 각 노드의 부모 노드의 index
is_leaf = []  # 각 노드가 말단 노드인지 확인해주는 배열. 0 혹은 1이 있다.
sparse_matrix = []  # 노드 별 연결 관계를 나타내느 sparse matrix
N, R = -1, 1  # 총 노드 개수, 루트 노드 번호.
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)


def make_root_node(self_adr, data_min, data_max):
    iot_energy.iot_energy(self_adr, data_min,data_max)


def main():
    global num_of_child, N, R, sparse_matrix, child_node, parent_node, is_leaf

    conn = sqlite3.connect(r"test.db")
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    iot=adjust_db.select_all_tasks(conn)
    print(iot)
    iot_num=len(iot)
    pool = multiprocessing.Pool(processes=iot_num)
    for i in iot:
        pool.apply_async(make_root_node, [i[0], i[2], i[3]])

    pool.close()
    pool.join()
    print("wow")


if __name__ == "__main__":
    main()
