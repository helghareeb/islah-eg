import os
i=0
for filename in os.listdir('.'):
    if filename.endswith(".jpeg"): 
        # print(os.path.join(directory, filename))
        os.rename(filename, str(i)+'.jpeg')
        i+=1
