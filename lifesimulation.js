// Rumi parvez life simulation information 


const lifeSimulation = false;
const name = "Rumi Pavrez";
const currentyear = 2026;
const dateOfBirth = 2009;
const age = currentyear - dateOfBirth;
const gender = "Male";
const country = "Bangladesh";
const district = "Narsingdi";
const hight = 5.6;
const weight = 48;
const education = "SSC";
const profation = "Student";
const correntmoney = 10000;
const mobile = "+8801407794143";
const email = "openyhoolce@gmail.com";
const address = "Openyhool-1600, Narsingdi,Dhaka, Bangladesh";
const monthlyincome = 20000;
const bankname = "Openyhool Bank";
const bankaccountnumber = 1234567890;
const bankaccounttype = "Saving";
const bankbranchname = "Openyhool Branch";
const bankbranchcode = 1234;
const bankUsername = "Rumi Pavrez";
const bankPassword = "1234567890";
const bankPin = 11445599;
const bankInterestRate = 5;
const Day = "Monday";
const Month = "July";
const discount = 20;
const marketBudget = 30000;
const privacy = true;



if (lifeSimulation === true) {
    console.log("==========================================");
console.log("      🌅 A Day in Rumi Pavrez's Life");
console.log("==========================================");

console.log("📖 Today is Monday, July 2026.");
console.log("Today our hero is Rumi Pavrez.");

console.log("------------------------------------------");
console.log("👤 Personal Information");
console.log("------------------------------------------");

console.log("Name:", name);
console.log("Age:", age);
console.log("Gender:", gender);
console.log("Country:", country);
console.log("District:", district);
console.log("Height:", hight + " Feet");
console.log("Weight:", weight + " KG");
console.log("Education:", education);
console.log("Profession:", profation);

console.log("------------------------------------------");
console.log("📞 Contact Information");
console.log("------------------------------------------");

console.log("Mobile:", mobile);
console.log("Email:", email);
console.log("Address:", address);

console.log("------------------------------------------");
console.log("🏦 Bank Information");
console.log("------------------------------------------");

console.log("Bank Name:", bankname);
console.log("Account Number:", bankaccountnumber);
console.log("Account Type:", bankaccounttype);
console.log("Branch:", bankbranchname);
console.log("Branch Code:", bankbranchcode);
console.log("Interest Rate:", bankInterestRate + "%");

console.log("------------------------------------------");
console.log("💰 Financial Information");
console.log("------------------------------------------");

console.log("Current Money:", correntmoney + " Taka");
console.log("Monthly Income:", monthlyincome + " Taka");
console.log("Market Budget:", marketBudget + " Taka");
console.log("Discount:", discount + "%");

console.log("------------------------------------------");
console.log("🔒 Privacy");
console.log("------------------------------------------");

console.log("Privacy Enabled:", privacy);

console.log("==========================================");
console.log("🚀 The Journey Begins...");
console.log("==========================================");

// // chacking the varibale details 
// console.log("------------------------------------")

// console.log(age);

// console.log("------------------------------------")




// NID card 
console.log("==========================================");
console.log("==========================================");
console.log("==========================================");

    if (age >=16) {
     NIDcard = true;
    console.log("You are eligible for NID card 😀");
    console.log("==========================================");

    }
    else {
    console.log("You are not eligible for NID card ❌");

    console.log("==========================================");
    }

        if (NIDcard) {
            BankAccount = true ;
            console.log("You can create Bank Account  on Openyhool Bank as 😀------ "+ bankaccounttype + " Account" );
            console.log("==========================================");

            console.log("Now Log in as user in Openyhool bank 📜 ")
            console.log("==========================================");
            
        } 
        else {
            console.log("You can't create Bank Account  on Openyhool Bank 🥹" );
            console.log("==========================================");
        }

        if (BankAccount){
             userLogin = true;
        }

        if (userLogin === true && bankUsername == "Rumi Pavrez" && bankPassword == "1234567890" && bankPin == "11445599" ){
             loginstaus = true;
            if (loginstaus){
                console.log("Wellcome to Openyhool Bank Dashboard -- Yes you have sucsessfully done thsi Login")
                console.log("==========================================");


                console.log("This is your bnnk dashboard ")
                console.log("==========================================");
                console.log(" frist deposite" + correntmoney)
                console.log("==========================================");
                console.log(" monthly deposite" + [ monthlyincome - (monthlyincome/100*50)] )
                monthballance =  monthlyincome - (monthlyincome/100*50)  ;
                console.log("==========================================");

                console.log('this bank provideing 20% profit for yearly ')
                 bankballance = correntmoney + monthballance ;
                 bankYearlyBallance = bankballance*12 + (bankballance*12)/100*20 ;
                 console.log( "After 1 Yeare  The  bank details of your is " + bankYearlyBallance);
                 console.log("==========================================");
            }
            else {
                console.log("sorry you are invlid user")
                console.log("==========================================");
            }
            if (privacy){
                console.log("This is your bank User Name--> " + bankUsername );

                console.log("This is your bank Bankaccountnumber--> " + bankaccountnumber);

                console.log("This is your bank Bank Account Type--> " + bankaccounttype );

                console.log("This is your bank Password--> " + bankPassword );

                console.log("This is your bank User email--> " + email);

                console.log("This is your bank Secrate Pin--> " + bankPin );

                console.log("This is your bank Bank Branch Name--> " + bankbranchname );

                console.log("This is your bank Branch Code--> " + bankbranchcode);

                console.log("==========================================");

            }
            

            else {
                console.log(" The bank details is  privet for now try agin letter afte rthe public it")
                console.log("==========================================");
            }
            

            if (bankYearlyBallance >= 100000){
                isRich = true ;
                console.log("You are a rich man👨 ")
                console.log("==========================================");
            }

        }   else {
            console.log("You are a poor man 🥹")
            console.log("==========================================");
        }


        if (isRich){
            isholidya = true ;
            console.log("You have holyday for today 😎")
            console.log("==========================================");

        }

        else {
            console.log("dhor fokira sala. kaj kor giya 🙄")
            console.log("==========================================");

        }

        if (isholidya){
            gomerket = true ;
            console.log("you can go on merket ♥️")
            console.log("==========================================");
        }

        if (gomerket === true && discount >=20 ){
            productPrice = 20000;
            console.log("wllcome to the zamona shoping mall 👋😀 ")
            console.log("==========================================");
        }

        else {
            console.log("Eto kiptami koren keno 😤 " + discount +"eee ki shoping hoy na dhorrrrr.............")
            console.log("==========================================");

        }

        if (productPrice < marketBudget){
            console.log("You have " + discount + "% discount so enjoy this shoping ")
            totalPrice = productPrice - (productPrice/100*discount)
            console.log("==========================================");


        }
        if (totalPrice <= marketBudget){
            Buyit = true;
            console.log( 'your Total price is -- ' + totalPrice)
            console.log("==========================================");
        }
        else {
            console.log("Ar koto ebar to kinen vhi 👺")
            console.log("==========================================");
        }

        if (Buyit){
            chanckbank = true;
            console.log("How many 💰 money you have now? Chack thye bank details---->")
            console.log("==========================================");
        }
        else {
            console.log("Al though i am felling dipration but ok. Thanks for jurny with me Today. see you soon next version ofmy life 🙄")
            console.log("==========================================");
        }

        if (chanckbank){

            nowBallance = bankYearlyBallance - totalPrice ;
            console.log("recently You had payment " + totalPrice )
            console.log("Your courrent Bank Ballance is" + nowBallance)
            console.log("==========================================");

            
        }
        if (nowBallance >= 50000){
            ishappy = true;
            console.log("i am so Happy right now 😀♥️")
            console.log("==========================================");
        }
        else {
            console.log("nare vhi jai abar ferot diya ashi 😁")
            console.log("==========================================");
            console.log("GF says : ---  Sala kipta. Eto takar malik hoya merket koira abar ferot des! BREEEEEEEEEK -------------UP 😤💔")
            console.log("==========================================");
            console.log("Na jan thak rag koiro na ferot dimo na 😁")
            console.log("==========================================");
            ishappy = true;
        }
        if (ishappy){
            gohome = true;
            console.log("Accha jan ajker jonno bashay jai . 👋 ")
            console.log("==========================================");
        }
        else {
            console.log("Bashay ee jamo ga bhire  onek rod 🫠 ")
            console.log("==========================================");
            gohome = true;
        }
        if (gohome){
            sleep = true ;
            console.log("ajke ami onek klanto . jai ghomaiga 🥶")
            console.log("==========================================");
        }

        if (sleep){
            console.log("==========================================");
            console.log("The END this Simulation 😀 " )
            console.log("Thanks for jurny with me for today🥰 " )
            console.log("SEE you soon tommorw ♥️" )
            console.log("==========================================");
        }
} 

else {
    console.log("Please make sure thsi simulation are permited or allowed . 🥹")
    console.log("For allowing - make sure that the------>  lifeSimulation = true 👇")
    console.log("Courrent staus is thye lifeSimulation  is ---> " + lifeSimulation )
}
