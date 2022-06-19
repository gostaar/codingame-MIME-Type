const n = parseInt(readline());
const q = parseInt(readline());

var mimeMap = {};

function getMimeType ( fileName )
{
    var qArray = fileName.split(".");
    if ( qArray.length > 1 )
    {
        var extension = qArray.pop().toLowerCase();
        if(  mimeMap[extension] )
        {
            return (mimeMap[extension]);
        }
    }
    return "UNKNOWN";
}

for (var i = 0; i < n; i++) {
    var lineN = readline().split(" ");
    mimeMap[lineN[0].toLowerCase()] = lineN[1];
}

for( var j = 0 ; j < q ; j++ )
{
    console.log (getMimeType(readline()));
}
