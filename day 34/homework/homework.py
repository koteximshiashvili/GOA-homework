def find_short(s):
    list1 = s.split(" ")


    word_len = len(list1[0])
    for i in list1:
        if len(i) < word_len:
            word_len = len(i)
    
    # word_len = 3
    return word_len

print(find_short("bitcoin take over the world maybe who knows perhaps"))
#ამ კოდში S ცვლადს სფეისებთან ბრჭყალები დაეწერება შემდეგ შევქმენით ცვლადი word_lenი word_lenში იქნება 7 რადგან 
#პირველი სიტყვა არის 7 ასოთი შემდეგ ფუნქცია ამოწმებს შემდეგი სიტყვა ასოებით ნაკლებია თუ არა თუ არ არის ნაკლები
#მაშინ გააგრძელებს ძებნას თუ არის ნაკლები მაშინ ამ რიცხვს შეიტანს word_lenში და ასე გააგრძელებს ბოლომდე.