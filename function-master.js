function objectValues(obj) {
    var output = [];
    for(var key in obj) {
        output.push(obj[key]);
    }
    return output;
}


function keysToString(obj) {
    return Object.keys(obj).join(" ");
}

function valuesToString(obj) {
    var output = [];
    for(var key in obj) {
        if(typeof obj[key] === "string") {
            output.push(obj[key]);
        }
    }
    return output.join(" ");
}

function arrayOrObject(arg) {
    if(Array.isArray(arg)) {
        return "array";
    } else {
        return "object";
    }
}

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}

function capitalizeAllWords(str) {
    var output = str.split(' ');
    for (var i = 0; i < output.length; i++) {
        output[i] = output[i].charAt(0).toUpperCase() + output[i].slice(1);
    }
    return output.join(' ');
}

function welcomeMessage(obj) {
    return "Welcome " + obj.name[0].toUpperCase() + obj.name.slice(1) + '!'; 
} 

function profileInfo(obj) {
    return obj.name.charAt(0).toUpperCase() + obj.name.slice(1) + ' is a ' + obj.species.charAt(0).toUpperCase() + obj.species.slice(1);
}

function maybeNoises(obj) {
    if (Array.isArray(obj.noises) && obj.noises.length < 1) {
        return 'there are no noises';
    } else if (Array.isArray(obj.noises) && obj.noises.length > 0) {
        return obj.noises.join(' ');
    } else {
        return 'there are no noises';
    }
} 

function hasWord(str, target) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        if (words[i] === target) {
            return true;
        }
    }
    return false;
} 

function addFriend(name, obj) {
    obj.friends.push(name);
    return obj;
}

function isFriend(name, obj) {
    var friends = obj.friends;
    if (Array.isArray(friends)) {
        for (var i = 0; i < friends.length; i++) {
            if (name === friends[i]) {
                return true;
            }
        }
    }
    return false;
}

function nonFriends2(name, people) {
    var output = [];
    var names = [];
    for (var i = 0; i < people.length; i++) {
      console.log(people[i].name);
      names.push(people[i].name);
    }
    for (var j = 0; j < people.length; j++) {
      if (name === people[j].name) {
        var friends = people[j].friends;
        if (friends.length < 1) {
          names.splice(names.indexOf(name),1);
          return names;
        } else {
          for (var k = 0; k < names.length; k++) {
            for (var l = 0; l < friends.length; l++) {
              if (friends.indexOf(names[k]) === -1 && output.indexOf(names[k]) === -1) {
                output.push(names[k]);
              }
            }
          }
        }
      }
    }
  output.splice(output.indexOf(name),1);
  return output;    
} 

function nonFriends(name, data){
    var names = [];
    var notFriends = [];
    for(var i=0; i < data.length; i ++){ 
        names.push(data[i].name)
    } 
    
    for(var i=0; i < data.length; i ++){ 
        if(data[i].name === name){
            var friends = data[i].friends
            for(var j =0; j < names.length; j++){
                if(friends.indexOf(names[j]) === -1 && names[j] !== name){
                    notFriends.push(names[j]);
                }
            }
        }
    } 
    return notFriends;
}

function updateObject(obj, key, val) {
    for (var prop in obj) {
        if (prop !== key) {
            obj[key] = val;
        }
    }
    return obj;
} 


function removeProperties(obj, arr) {
  for (var key in obj) {
    for (var i = 0; i < arr.length; i++) {
      if (key === arr[i]) {
        delete obj[key];
      }
    }
   }
   return obj;
} 

function dedup(arr) {
    var output = [];
      for (var i = 0; i < arr.length; i++) {
         if (output.indexOf(arr[i]) === -1) {
            output.push(arr[i]); 
         } else {
           if (output.length < 1) {
             output.push(arr[i]);
           }
         }
      }
  return output;
}