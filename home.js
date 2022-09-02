function loadCoupon(){
    document.getElementById('coupon').style.display="block";
    // document.getElementsByClassName('jumbotron container').style.opacity="0.5";

}
const closeCoupon=()=> {
    document.getElementById('coupon').style.display="none";
    document.getElementsByClassName('jumbotron container').style.opacity="1";
}