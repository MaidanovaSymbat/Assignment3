
var education_level = new Array();
education_level["undergraduate"] = 1.5;
education_level["college"] = 1.2;
education_level["high_school"] = 1.05;
education_level["middle_school"] = 0.9;

var family_networth = new Array();
family_networth["upper_class"] = 2;
family_networth["middle_class"] = 1.5;
family_networth["lower_class"] = 1.2;

var caste = new Array();
caste["brahmin"] = 100;
caste["kshatriya"] = 50;
caste["vaishya"] = 20;
caste["shudra"] = 10;
caste["varna"] = -50;

var skills = new Array();
skills["musical_instruments"] = 10;
skills["cook"] = 20;
skills["easygoing"] = 15;
skills["sings"] = 10;

var ages = new Array();
ages["teen"] = 1.5;
ages["young"] = 1.2;
ages["adult"] = 0.95;

function getTotal()
{
    var form = document.forms["calc"]

    var selectedEdu = form.elements["education"];
    if(selectedEdu.value == 'blank') return 'Select education';
    edu_price = education_level[selectedEdu.value];

    var selectedFamily = form.elements["networth"];
    if(selectedFamily.value == 'blank') return 'Select family networth';
    family_price = family_networth[selectedFamily.value];

    var selectedCaste = form.elements["caste"];
    if(selectedCaste.value == 'blank') return 'Select caste';
    caste_price = caste[selectedCaste.value];

    skill_price = 0;

    if (document.getElementById('musical_instruments').checked) {
        skill_price += 10;
    }
    if (document.getElementById('cook').checked) {
        skill_price += 20;
    }
    if (document.getElementById('easygoing').checked) {
        skill_price += 15;
    }
    if (document.getElementById('sings').checked) {
        skill_price += 10;
    }

    var selectedAge = document.querySelector("input[name=age]:checked");
    if(selectedAge == null) {
        return "Select age";
    }
    age_price = ages[selectedAge.value];

    if (document.getElementById('parents').checked) {
        total = (((100 * edu_price * family_price) + caste_price + skill_price) * age_price)*0.85;
    }
    if (document.getElementById('character').checked) {
        total = (((100 * edu_price * family_price) + caste_price + skill_price) * age_price)*0.9;
    }
    if (document.getElementById('person').checked) {
        total = ((100 * edu_price * family_price) + caste_price + skill_price - 20) * age_price;
    }
    if(document.getElementById('parents').checked == false && document.getElementById('character').checked == false && document.getElementById('person').checked == false){
        total = ((100 * edu_price * family_price) + caste_price + skill_price) * age_price;
    }

    return total;
}

function myFunction() {
    var price = getTotal();
    alert(price);
  }