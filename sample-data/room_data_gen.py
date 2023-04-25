import json
roomCode_list = ["J413", "J415", "J201", "J102", "J402"]
uuid = ["19375e0d-1ddc-448a-bf38-8c6c9e7745c5",
        "50a8cfa7-057f-46e3-9c39-3d50f75433d5",
        "ccc7b75e-f285-4fcb-84db-b358aa7e14d8",
        "9c086771-5de5-4e01-b5d7-08c160b1a7f3",
        "2a23436e-23a1-4c3a-9582-2a4ee34c4f4d"]
i = 0
data = []
for roomCode in roomCode_list:
    record = {
        "_id": roomCode,
        "uuid": uuid[i]
    }
    data.append(record)
    i += 1

json_data = json.dumps(data, indent=4)
print(json_data)
