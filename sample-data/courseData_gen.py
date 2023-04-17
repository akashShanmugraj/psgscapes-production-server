import json
classCode_list = ["19Z101", "19Z102", "19Z104", "19Z201", "19Z202",
                  "19Z204", "19Z301", "19Z302", "19Z304", "19Z401", "19Z402", "19Z404"]
x = 0
record = []
for i in classCode_list:
    data = {
        "_id": i,
        "courseName": f"Course {x+1}",
        "faculty": f"Faculty {x+1}",
        "classKey": f"22Z{x+1}"
    }
    record.append(data)
    x += 1
json_data = json.dumps(record, indent=4)
print(json_data)
