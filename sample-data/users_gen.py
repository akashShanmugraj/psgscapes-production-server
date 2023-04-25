import json

names_list = ['ABINAYA B', 'ABINAYA SURESH', 'ABIRAMI M', 'ADHARSH NAMBIAR', 'ADISH KUMAR S', 'AJAY S', 'AKSHARAA P', 'ANANDKUMAR N S', 'ANBU SELVAN M', 'ARAVINDHKRISHNAN', 'ARAVINTH CHERAN K', 'ARULMOZHI B', 'BRAGADEESH V', 'DHAKKSHIN S R', 'DHEEKSHITHA R', 'ELAKKIYA G', 'GAYATHRI K S', 'GEETHA P K', 'GOBIKA R', 'GOKUL G', 'HARIHARAN D', 'HARISH K', 'HARSHINI S P', 'HEMANTHKUMAR V', 'INIYAA N', 'JAYAVARSHINI S S', 'JEEVASHAKTHI V', 'KABHINYASRI S V', 'KARTHIK SRINIVAS S', 'KISHOREADHITH V', 'M RAJ RAGAVENDER', 'MADDI SRINIVASA PAD', 'MADHISHA S', 'MANOJKUMAR K', 'MANORANJAN A', 'MITHRA K M', 'MOHAMED MUZAMMIL', 'MONISH RAJAN L',
              'MOUMITHA K', 'NAVEEN RAGAV K', 'O KEERTHI', 'PRAMODINI P', 'PRANAVJI K', 'PRATEEKSHAA T', 'PRATISH MITHRA J', 'PREAM S', 'PRITHVIN K C', 'RAJAILAKKIYAN I B', 'RAMAPRIYA S', 'RITHANIYAA B', 'RITHVIK K', 'ROHITH PRAKASH', 'S AKASH', 'S KARTHIKEYAN', 'SANDEEP K', 'SANDHIYA R', 'SANJITHA R', 'SNESHA B', 'SREERAGHAVAN R', 'SRI DEV S', 'SRIHARI K K', 'SRUTHI S', 'SUDHANBALAJI M', 'THAKSHIN KUMAR T', 'THAMINA ANZUM A', 'THARIGALAKSHMI S', 'THEETCHANAA RA', 'VARSHINI R', 'VIGNESHWARAN P', 'VIJEYASRI T', 'VINITHAA P', 'VISHNU BARATH K', 'VIVEKANAND M U', 'YOHITH MUKILAN N', 'KRISHANU DEY', 'MUKESH E', 'PRANEETH M', 'SIBI SENTHIL']

data = []

for i, name in enumerate(names_list):
    record = {
        "_id": f"22Z2{i+2}",
        "name": name,
        "department": "CSE",
        "role": "student",
        "password": "1234",
        "classKey": "22Z2"
    }
    data.append(record)

# Convert the list of JSON objects to a JSON string
json_data = json.dumps(data, indent=4)

# Print the resultin
print(json_data)
