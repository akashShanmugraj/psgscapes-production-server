import csv
# display a NOTE to user while uploading to ensure that API call follows the below structure


apiGET = '''Period, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
time,X-Y,X-Y,X-Y,X-Y,X-Y,X-Y,X-Y,X-Y,X-Y,X-Y,X-Y
Monday,<coursecode>,<coursecode>,<coursecode>,<coursecode>,<coursecode>,<coursecode>,<coursecode>'''
# apiGET = ''


class Parser:
    def __init__(self) -> None:
        self.apiGET = apiGET
        self.csvinputLines = []
        self.queryList = []

    def inputParser(self, parsableInput) -> list:
        # give self.apiGET as argument
        self.csvinputLines = []
        self.inputLines = parsableInput.split('\n')
        for line in self.inputLines:
            tempList = line.split(',')
            self.csvinputLines.append(tempList)
        return self.csvinputLines
    
    def constructQuery(self, classCode, parsedCSV):        
        self.queryList = []
        self.queryTemplate = f"INSERT INTO {classCode} ('Period', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11') VALUES("
        for row in parsedCSV:
            query = self.queryTemplate
            for cell in row:
                query += f"'{cell}',"
            query = query[:-1] + ');'
            self.queryList.append(query)
        print(self.queryList)

# test run
# pasringclass = Parser
# Parser.constructQuery(Parser, '22z2', Parser.inputParser(Parser, apiGET))

# apiSplit = list()



