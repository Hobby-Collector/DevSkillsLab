$('#addSkill').click(function(evt){
    let skill = " "+$('input:text').val();
    console.log(skill);
    var newRow = `<tr>  
                    <td><button class="btn btn-xs btn-danger">X</button></td>
                    <td>${skill}</td>
                 </td>`
    $('#skillsTable tbody').append(newRow);
})