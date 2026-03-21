import os

# print('=== File Path Operations ===\n')

# curent_dir = os.getcwd()
# print(f'Current directory: {curent_dir}')

# test_file = 'test_data.txt'

# if os.path.exists(test_file):
#     print(f'{test_file} exists')
# else:
#     print(f'{test_file} does not exist')

# if not os.path.exists(test_file):
#     with open(test_file, 'w') as file:
#         file.write('Tets User 1\n')
#         file.write('Tets User 2\n')
#         file.write('Tets User 3\n')
#     print(f'Created {test_file}')

# if os.path.isfile(test_file):
#     print(f'{test_file} is a file')

# size = os.path.getsize(test_file)
# print(f'File Size: {size} bytes')

# print(f'\nFiles in current directory:')
# files = os.listdir(curent_dir)
# for file in files[:10]:
#     print(f' - {file}')

# result_dir = 'test_results'
# if not os.path.exists(result_dir):
#     os.mkdir(result_dir)
#     print(f'\nCreated directory: {result_dir}')
# else: 
#     print(f'\nDirectory already exists: {result_dir}')

# data_dir = 'test_data'
# if not os.path.exists(data_dir):
#     os.mkdir(data_dir)
#     print(f'Created directory: {data_dir}')
# else:
#     print(f'Directory already exists')

# results = 'config.txt'
# if os.path.exists(results):
#     print(f'File {results} exists')
# else:
#     print(f'File does not exist')

# if not os.path.exists(results):
#     with open(results , 'w') as file:
#         file.write('Config 1\n')
#         file.write('Config 2\n')
#     print(f'File {results} created')

# print('\n\n === Reading and processing files ===\n ')

# with open("test_results.txt", "w") as file:
#  file.write("TC001,Login test,Pass\n")
#  file.write("TC002,Logout test,Pass\n")
#  file.write("TC003,Register test,Fail\n")
#  file.write("TC004,Search test,Pass\n")
#  file.write("TC005,Filter test,Fail\n")

# print('Created test_results.txt')

# print('\nReading file line by line:')
# with open('test_results.txt', 'r') as file:
#     for line in file:
#         line = line.strip()
#         print(f' {line}')
# print(f'Reading into list:')
# with open('test_results.txt', 'r') as file:
#     lines = file.readlines()
#     print(f'Total lines: {len(lines)}')

# print('\nProcessing test results:')
# passed = 0
# failed = 0

# with open('test_results.txt', 'r') as file:
#     for line in file:
#         line = line.strip()
#         parts = line.split(',')

#         test_id = parts[0]
#         test_name = parts[1]
#         status = parts[2]

#         if status == 'Pass':
#             passed += 1
#         elif status == 'Fail':
#             failed +=1
#             print(f'Failed: {test_id} - {test_name}')

# print(f'\nSummary: {passed} passed , {failed} failed')

# with open('test_summary.txt' , 'w') as file:
#     file.write("TEST EXECUTION SUMMARY\n")
#     file.write("=" * 40 + "\n")
#     file.write(f"Total Tests: {passed + failed}\n")
#     file.write(f"Passed: {passed}\n")
#     file.write(f"Failed: {failed}\n")
#     file.write(f"Pass Rate: {(passed/(passed+failed)*100):.1f}%\n")

# print("✓ Created test_summary.txt")

print(f'\n === Solo chalange === \n')

test_results = 'test_results.txt'

with open(test_results , 'w') as file:
    file.write("TC001,Login test,Pass\n")
    file.write("TC002,Logout test,Pass\n")
    file.write("TC003,Register test,Fail\n")
    file.write("TC004,Search test,Pass\n")
    file.write("TC005,Filter test,Fail\n")

passed = 0
failed= 0

failed_test = []

with open(test_results , 'r') as file:
    for line in file:
        line = line.strip()
        parts = line.split(',')
        
        test_id = parts[0]
        test_name = parts[1]
        status = parts[2]

        if status == 'Pass':
            passed += 1
        elif status == 'Fail':
            failed +=1
            failed_test.append(line + '\n')

print(f'\nSummary: {passed} passed , {failed} failed')

failed_tests = 'failed_test.txt'
with open(failed_tests , 'w') as file:
    for test in failed_test:
        file.write(test)

print(f"Total: {passed + failed}")
print(f"Passed: {passed}")
print(f"Failed: {failed}")