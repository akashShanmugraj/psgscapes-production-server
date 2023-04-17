import json
import random

day_list = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
classKey_list = ["22Z22", "22Z23", "21Z2", "21Z3"]
classCode_list = ["19Z101", "19Z102", "19Z104", "19Z201", "19Z202",
                  "19Z204", "19Z301", "19Z302", "19Z304", "19Z401", "19Z402", "19Z404"]
roomCode_list = ["J413", "J415", "J201", "J102", "J402"]
data = []

for classKey in classKey_list:
    for day in day_list:
        record = {
            "day": day,
            "classKey": classKey,
            "1": {
                "classCode": random.choice(classCode_list),
                "roomCode": random.choice(roomCode_list)
            },
            "2": {
                "classCode": random.choice(classCode_list),
                "roomCode": random.choice(roomCode_list)
            },
            "3": {
                "classCode": random.choice(classCode_list),
                "roomCode": random.choice(roomCode_list)
            },
            "4": {
                "classCode": random.choice(classCode_list),
                "roomCode": random.choice(roomCode_list)
            },
            "5": {
                "classCode": random.choice(classCode_list),
                "roomCode": random.choice(roomCode_list)
            },
            "6": {
                "classCode": random.choice(classCode_list),
                "roomCode": random.choice(roomCode_list)
            },
            "7": {
                "classCode": random.choice(classCode_list),
                "roomCode": random.choice(roomCode_list)
            },
            "8": {
                "classCode": random.choice(classCode_list),
                "roomCode": random.choice(roomCode_list)
            }
        }

        data.append(record)

json_data = json.dumps(data, indent=4)
print(json_data)
