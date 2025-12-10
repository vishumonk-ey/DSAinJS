// OBJECT---:
    // unordered -> aisa nhi ke beech me kuch insert krskte ya end me, kyuki order hai hi nahi.
    // pretty fast.
    // accessing--->O(1)--kisi bhi key ko acess krna
    // insertion--->O(1)
    // removal--->O(1)
    // searching--> O(n)--->har ek key ka value lana aur check karna ki match horha hai ya nhi--->value ko search krna.
    //   BIG O OF OBJECT METHODS-:
    // 1)Object.keys(obj)-->O(n)
    // 1)Object.values(obj)-->O(n)
    // 1)Object.entries(obj)-->O(n)
    // 1)obj.hasOwnProperty("key")--->O(1)
    let student={
        name:"Vishal",
        year:"2nd",
        phoneNo:9899,
    }
    // console.log(Object.keys(student))
    // console.log(Object.entries(student))
    // console.log(student.hasOwnProperty("name"))

    // #####    ARRAYS   -:
    // -->ordered 
    // --->if order is needed then we can think
    //         big O of arrays-:
    //     * acessing->O(1)-->har ek ko traverse nhi krega just jo index diya hai directly uspe chala jayega.
    //     * searching-->har ek index pe jake uski value ko match kregaa---->O(n)
    //     * inserting --> a) push ->(end me insert krega and kuch extra krne ka jarurat nhi hai)--> O(1) 
    //     but jab array declare krte hain to jitna elements hai usse jyada capacity ke liye memory allocate hota hai so agar insert krenge last me to chup chaap ajayega but agar size full hai aur push kru to naya memory allocate hoga aur firr purane elements copy krke naye jagah pe bheje jayenge and then insert hoga , then it would became O(n).but ye case rare hai
    //                     b) unshift -> O(n)--> har ek elements ko right shift krna padega
                        
    //     * removal--> a) pop-> always O(1)
    //                  b)shift -> O(n)--> because jaise hi remove hoga first vala tab remaining elemnts ko left krna padega  

    //                  ## BIG O OF ARRAY OPERATIONS----:
        
    //         *sort->O(N LOGN)
    //         *CONCAT->O(N)
    //         *SLICEE->O(N)
    //         *SPLICE->O(N)
    //         *FOREACH,MAP,FILTER,REDUCE-->O(N)

  