let gradesem1 = 0
let gradesem2 = 0
let majorgrade = 0
let creditsem1 = 1
let creditsem2 = 1
let majorcredit = 1
var checkspell = false


document.querySelector('#menu').addEventListener('submit', function(event){
    
    event.preventDefault()   

    let Subject = document.getElementById('subject').value
    let SID = document.getElementById('sid').value
    let Grade = document.getElementById('grade').value
    let Sem1 = document.getElementById('sem1').value
    let Sem2 = document.getElementById('sem2').value

    // SemesterSelection
    let Select
        if (document.getElementById('sem1').checked){
            let sem1 = document.getElementById('sem1').value
            Select = sem1           
        }
        if (document.getElementById('sem2').checked){
            let sem2 = document.getElementById('sem2').value
            Select = sem2
        }
        
        // SpellingCheck
        if(Subject.length == 0){
            alert("Please fill subject name.")
            checkspell = false
        }else if(isNaN(SID)){
            alert("Please fill subject id.")
            checkspell = false
        }else if(SID.length != 6){
            alert("Please fill your subject id correctly.")
            checkspell = false
        }else checkspell = true

        if(checkspell){
            var major = SID.substring(0,3);
            if(major === '261' || major === '269' ){
        
                if (Grade === 'A' ){
                    majorgrade += 4
                }
                if(Grade === 'B+') {
                    majorgrade += 3.5
                }
                if(Grade === 'B') {
                    majorgrade += 3
                }
                if(Grade === 'C+') {
                    majorgrade += 2.5
                }
                if(Grade === 'C') {
                    majorgrade += 2
                }
                if(Grade === 'D+') {
                    majorgrade += 1.5
                }
                if(Grade === 'D') {
                    majorgrade += 1
                }
                if (Grade === 'F') {
                    majorgrade += 0
                } 
                var GDivideC = majorgrade/majorcredit;
                var Mgradefloating = GDivideC.toFixed(2)
                const MajorGrade = document.querySelector('#MJGrade')
                
                //const h2 = document.createElement('h2');
                MajorGrade.innerHTML = Mgradefloating

                majorcredit++
            }
        

        if(Select === "sem1"){
            const container = document.querySelector('#tableinfo');
            const list = document.createElement('tr');
            const table1 = document.createElement('td');
            const table2 = document.createElement('td');
            const table3 = document.createElement('td');
            const spanSub = document.createElement('span');
            const spanCre = document.createElement('span');
            const spanGra = document.createElement('span');
        
            spanSub.innerHTML=Subject;
            spanCre.innerHTML=SID;
            spanGra.innerHTML=Grade;
                
            //Decorate
            // table1.setAttribute("style","padding:20px;")
            // table2.setAttribute("style","padding:20px;")
            // table3.setAttribute("style","padding:20px;")
        
            //Append to table
            table1.append(spanSub);
            table2.append(spanCre);
            table3.append(spanGra);
        
            //Append to list(row)
            list.append(table1)
            list.append(table2)
            list.append(table3)
        
            //Append to ol
            container.append(list)
        
            if (Grade === 'A' ){
                gradesem1 += 4
            }
            if(Grade === 'B+') {
                gradesem1 += 3.5
            }
            if(Grade === 'B') {
                gradesem1 += 3
            }
            if(Grade === 'C+') {
                gradesem1 += 2.5
            }
            if(Grade === 'C') {
                gradesem1 += 2
            }
            if(Grade === 'D+') {
                gradesem1 += 1.5
            }
            if(Grade === 'D') {
                gradesem1 += 1
            }
            if(Grade === 'F') {
                gradesem1 += 0
            }
        
            var GDivideC = gradesem1/creditsem1;
            var gradefloating = GDivideC.toFixed(2)
            const Sem1Grade = document.querySelector('#Sem1Grade')
            // Sem1Grade.setAttribute("style","color: #428la4;")
            //const h2 = document.createElement('h2');
            Sem1Grade.innerHTML = gradefloating
        
            creditsem1 += 1
        }else{
            const container2 = document.querySelector('#tableinfo2');
            const list2 = document.createElement('tr');
            const table1_2 = document.createElement('td');
            const table2_2 = document.createElement('td');
            const table3_2 = document.createElement('td');
            const spanSub2 = document.createElement('span');
            const spanCre2 = document.createElement('span');
            const spanGra2 = document.createElement('span');

            spanSub2.innerHTML=Subject
            spanCre2.innerHTML=SID
            spanGra2.innerHTML=Grade
            
            //Decorate
            // table1_2.setAttribute("style","padding:20px;")
            // table2_2.setAttribute("style","padding:20px;")
            // table3_2.setAttribute("style","padding:20px;")

            //Append to table
            table1_2.append(spanSub2);
            table2_2.append(spanCre2);
            table3_2.append(spanGra2);

            //Append to list(row)
            list2.append(table1_2)
            list2.append(table2_2)
            list2.append(table3_2)

            //Append to ol
            container2.append(list2) 

            if (Grade === 'A' ){
                gradesem2 += 4
            }
            if(Grade === 'B+') {
                gradesem2 += 3.5
            }
            if(Grade === 'B') {
                gradesem2 += 3
            }
            if(Grade === 'C+') {
                gradesem2 += 2.5
            }
            if(Grade === 'C') {
                gradesem2 += 2
            }
            if(Grade === 'D+') {
                gradesem2 += 1.5
            }
            if(Grade === 'D') {
                gradesem2 += 1
            }
            if (Grade === 'F') {
                gradesem2 += 0
            }

            var GDivideC2 = gradesem2/creditsem2;
            var gradefloating2 = GDivideC2.toFixed(2)
            const Sem2Grade = document.querySelector('#Sem2Grade')
            // gradesem2.setAttribute("style","color: #428la4;")
            //const h2 = document.createElement('h2');

            Sem2Grade.innerHTML = gradefloating2

            creditsem2 ++
        }
    }
        
        
},false)