
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function changeColor(color){
  $('.allow-change').css('color', color);
}

function changeButtonBorderColor(color) {
	$('.allow-button-change').css('border-color', color);
}

function darkModeFunc() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function showHtmlDiv() {
  var htmlShow = document.getElementById("html-show");
  if (htmlShow.style.display === "none") {
    htmlShow.style.display = "block";
  } else {
    htmlShow.style.display = "none";
  }
}

function dropFunc() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var noun = ["Grapeseed", "Gringus", "Loomster", "Mail", "Mattress", "Soap", "Persons", "Photograph", "Diplodocus", "Bread", "Maracas", "Utopia", "Tangerine", "Pot",  "News", "North", "East", "South", "West", "Bogey", "Plaque", "Clerk", "Array", "Uncle", "Panther", "Sage", "Cheddar", "Powder", "Plate", "Exoskeleton", "Meal", "Fertilizer", "Mouthful", "Salad", "Beef", "Train", "Tomato", "Pineapple", "Mason", "Dragonfruit", "Rocket", "Ice", "Turkey", "Copper", "Air", "Ball", "Mercury", "Pluto", "Moon", "Business", "Sales", "Clay", "Refuge", "Bronze", "Silver", "Gold", "Platinum", "Plastic", "Cat", "Dog", "Bag", "Bossman", "Character", "Ratings", "Pond", "Salt", "Top", "Chairs", "Masterpiece", "Salmon", "Logic", "Cake", "Package", "Illusion", "Jeopardy", "Brick", "Flute", "Sled", "Medication", "Wheat", "Rubber", "Blimp", "Word", "Uranium", "Deuterium", "Tube", "Cadmium", "Tuft", "Version", "Apex", "Champion", "Amethyst", "Pirate", "Monkey", "Toad", "Velocity", "Jeans", "Pants", "Videotape", "Spider", "Showdown", "Goanna", "Komodo-Dragon", "File", "Tanuki", "Lighthouse", "Raccoon", "Snake", "Sand", "Blockhead", "Brain", "Rope", "Ooblek", "Whisker", "Bark", "Chocolate", "Jello", "Jelly", "Marshmallow", "Electrodynamics", "Aeroplane", "Dominator", "Quintessence", "Thermodynamics", "Aerodynamics", "Stereo", "Madness", "Thermometer", "Track", "Base", "Jumper", "Time", "Machine", "Funk", "Theory", "Adventure", "Club", "Hexagon", "Everything", "Geometry", "Finger", "Wave", "Title", "Cacophony", "Chaos", "Berry", "Cherry", "Dairy", "Grain", "Vegetable", "Fruit", "Protein", "Meat", "Pufferfish", "Discovery", "Salary", "Barbarian", "Paper", "Citizen", "Haggus", "Prickle", "Dirt", "Fire", "Fantasy", "Heap", "Education", "Newspaper", "Mystery", "Portal", "Subdivision", "Acid", "Water", "Placemat", "Band", "Bonus", "Cream", "Phobos", "Ash", "Lava", "Magma", "Zinc", "Foil", "Cobalt"]

var verb = ["Shake", "Get", "Question", "Sizzle", "Meow", "Hover", "Clank", "Balance", "Plot", "Slap", "Float", "Postpone", "Ploat", "Establish", "Forget", "Uncoil", "Allay", "Slosh", "Plank", "Lob", "Thrust", "Trust", "Slash", "Type", "Spill", "Vex", "Clog", "Plug", "Hop", "Order", "Crawl", "Trot", "Command", "Quote", "Direct", "Accept", "Implode", "Explode", "Crank", "Saddle", "Egged", "Toilet-paper", "Add", "Subtract", "Multiply", "Divide", "Continue", "Extract", "Excavate", "Mold", "Blow", "Splish", "Crop", "Object", "Read", "Sell", "Toll", "Ran", "Plop", "Utilize", "Saw", "Wait", "Remix", "Distinguish", "Hide", "Claim", "Disclaim", "Admire", "Patent", "Copyright", "Help", "Flatten", "Pick", "Splat", "Fight", "Squeak", "Freeze", "Boil", "Burn", "Inflict", "Reflect", "Deflect", "Flex", "Solidify", "Liquefy", "Gasify", "Autoclick", "Swim", "Hold", "Blackmail", "Want", "Erupt", "File", "Pounce", "Dawdle", "Imprison", "Boost", "Watch", "Bowl", "Use", "Hack", "Record", "Satisfy", "Unsatisfy", "Eat", "Rob", "Scroll", "Cackle", "Grow", "Swig", "Chug", "Change", "Run", "Ran", "Stack", "Hang", "Crease", "Propel", "Prepare", "Punctuate", "Advance", "Block", "Bark", "Woof", "Crackle", "Edit", "Deadlock", "Heist", "Go", "Cycle", "Step", "Clutter", "Club", "Force", "Blast", "Process", "Dash", "Seafare", "Pelt", "Peg", "Educate", "Charge", "Soak", "Hypercharge", "Eject", "Descend", "Ascend", "Detect", "Pour", "Melt", "Validity"]

var adjective = ["Olympic", "Crimson", "Velvet", "Scarlet", "Teal", "Gilded", "Plentiful", "Good", "Less", "More", "Wild", "Mild", "Supreme", "Lonesome", "Inebriated", "Grubby", "Original", "Mini", "Tropical", "Lunar", "Solar", "Easy", "Odd", "Charismatic", "Stopped", "Tremendous", "Electric", "Junior", "Preposterous", "Dark", "Plump", "Oily", "Pyro", "Biological", "Automatic", "Strange", "Special", "Lime", "Painted", "Untouched", "Forgotten", "Tan", "Uncoloured", "Obscure", "Old", "Hagged", "Crusty", "Plain", "Grey", "Snuffly", "Sprinkly", "Stupid", "Silly", "Weird", "Crunchy", "Featured", "Young", "Youthful", "Ugly", "Disgusting", "Sad", "Mad", "Glad", "Rad", "Invulnerable", "Red", "Broken", "Second-hand", "Polished", "Painful", "Unknown", "Undiscovered", "Flaming", "Subzero", "Hospitalized", "Unstoppable", "Spotted", "Stuck", "Valuable", "Breathtaking", "Antique", "Legendary", "Worthless", "Exotic", "Jumbo", "Infinite", "Camo", "Edgy", "Dusty", "Wet", "Hexagonal", "Exquisite", "Silent", "Lost", "Sick", "Numb", "Verbal", "Solid", "Liquid", "Active", "Inactive", "Satisfied", "Unsatisfied", "Mint", "Swimmingly", "Evil", "Geometrical", "Aero", "Polar", "Dry", "Tidal", "Chaotic", "Prickly", "Octagonal", "Malleable", "Educated", "Micro", "Known", "Smooth", "Fast", "Far", "Crispy", "Wordy", "Outstanding", "Metallic", "Shiny", "Titanium"]

var bragArray = ["A very wonderful website.", "A very good website.", "A very great website.", "A very high quality website.", "A very proper website.", "A very helpful website.", "A very breathtaking website.", "A very legendary website.", "A very amazing website.", "A very fabulous website.", "A very wordy website.", "A very satisfying website.", "A very solid website.", "A very exquisite website.", "A very admirable website.", "A very special website.", "A very supreme website.", "A very terrific website.", "A very outstanding website.", "A very A-grade website.", "A very sophisticated website.", "A very VERY good website.", "A very well made website.", "A very iconic website."]

var bragWord = bragArray[Math.floor(Math.random() * bragArray.length)]

function showRandomFrom(nounArray, verbArray, adjectiveArray){
document.getElementsByClassName("nounOutput")[0].innerHTML = nounArray[Math.floor(Math.random() * nounArray.length)];
document.getElementsByClassName("verbOutput")[0].innerHTML = verbArray[Math.floor(Math.random() * verbArray.length)];
document.getElementsByClassName("adjectiveOutput")[0].innerHTML = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
}

function showRandomFromBrag(bragArray){
document.getElementsByClassName("bragOutput")[0].innerHTML = bragArray[Math.floor(Math.random() * bragArray.length)];
}

function secretFunc() {
  var x = document.getElementById("invis");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function swapFunc() {
  var x = document.getElementById("swap");
  if (x.innerHTML === "") {
    x.innerHTML = "<button style=\"background-color:black; border-color:#ed143d88; color:black; cursor:pointer;\" onclick=\"changeColor('#ed143d88'); changeButtonBorderColor('#ed143d88');\">-</button>&nbsp;&nbsp;<button style=\"background-color:black; border-color:#0055ff88; color:black; cursor:pointer;\" onclick=\"changeColor('#0055ff88'); changeButtonBorderColor('#0055ff88');\">-</button>&nbsp;&nbsp;<button style=\"background-color:black; border-color:#ffff0088; color:black; cursor:pointer;\" onclick=\"changeColor('#ffff0088'); changeButtonBorderColor('#ffff0088');\">-</button>";
  } else {
    x.innerHTML = "";
  }
}