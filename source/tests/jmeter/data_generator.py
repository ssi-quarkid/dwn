import random
import sys
import time
import uuid
def main():
    total = int(sys.argv[1])
    dids = generateDIDs(total)
    dates = generateDates(total)
    ids = generateIDs(total)
    ids2 = generateIDs(total)
    with open("params.csv", "w+") as file:
        for did, date, id, id2 in zip(dids, dates, ids, ids2):
            file.write(f"{did},{date},{id},{id2}\n")
            
def generateDIDs(total: int) -> list:
    dids = list()
    for _ in range(total):
        dids.append("%s" % f"did:modena:rsk:{'%030x' % random.randrange(16**30)}")
    return dids

def generateDates(total: int) -> list:
    dates = list()
    print(int(time.time()))
    for _ in range(total):
        dates.append("%s" % int(time.time()))
    return dates 

def generateIDs(total: int) -> list:
    ids = list()
    for _ in range(total):
        ids.append("%s" % uuid.uuid4())
    return ids

if __name__ == '__main__':
    main()