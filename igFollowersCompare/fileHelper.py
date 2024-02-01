import csv

def getProfilesFromIGExportToolsFile(filename):
    profiles = []
    with open(filename) as csvfile: #encoding="mbcs"
        csvReader = csv.reader(csvfile, delimiter=',')
        for row in csvReader:
            profiles.append(row[1])
    return profiles

def getProfilesFromInstastuffFile(filename):
    profiles = []
    with open(filename) as file: #encoding="mbcs"
        for row in file:
            withoutLineBreak = row.replace('\n', '')
            profiles.append(withoutLineBreak)
    return profiles

