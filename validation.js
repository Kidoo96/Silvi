
//validation za forma
function validate() {

    if( document.myForm.name.value == "" ) {
        alert( "Попълнете полето за име!" );
        document.myForm.name.focus() ;
        return false;
    }
    if( document.myForm.email.value == "" ) {
        alert( "Попълнете полето за имейл!" );
        document.myForm.email.focus() ;
        return false;
    }
    if( document.myForm.subject.value == "" ) {
        alert( "Попълнете полето за тема!" );
        document.myForm.subject.focus() ;
        return false;
    }

    return( true );
}