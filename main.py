def create_text_pyramid(input_text):
    if len(input_text) > 20 or " " in input_text:
        print("ข้อจำกัด: ความยาวของข้อความไม่เกิน 20 ตัวอักษรและไม่มีเว้นวรรค")
        return

    n = len(input_text)
    for i in range(n):
        print("  " * (n - i - 1), end="")
        for j in range(i + 1):
            if j == i:
                print(input_text[j], end="")
            else:
                print(input_text[j] + " ", end="")
        for j in range(i - 1, -1, -1):
            if j == 0:
                print(input_text[j], end="")
            else:
                print(input_text[j] + " ", end="")
        print()

    print(n)

# รับข้อความจากผู้ใช้
user_input = input("ป้อนข้อความ (ไม่เกิน 20 ตัวอักษรและไม่มีเว้นวรรค): ")

# เรียกใช้ฟังก์ชันเพื่อสร้างพีระมิด
create_text_pyramid(user_input)