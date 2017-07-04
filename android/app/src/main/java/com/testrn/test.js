var total=30;

var msg = test`The total is ${total} (${total*1.05} with tax)`;

function test(literals){

var result='';
var i=0;
while (i < literals.length) {
    result += literals[i++];
    console.log('lit数据'+literals[i-1])
    if (i < arguments.length) {
      result += arguments[i];
      console.log('参数'+arguments[i])
    }
  }

  return result;
}
console.log(msg);
var sender = '<script>alert("abc")</script>';
var message = SaferHTML`<p>${sender} has sent you a message.</p>`;
function SaferHTML(templateData) {
var s = templateData[0];
for (var i = 1; i < arguments.length; i++)
{ var arg = String(arguments[i]);  // Escape special characters in the substitution.
s += arg.replace(/&/g, "&amp;")
.replace(/</g, "&lt;")
.replace(/>/g, "&gt;");  // Don't escape special characters in the template.
s += templateData[i];
}
return s;
}
console.log(message);