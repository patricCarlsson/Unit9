
var wordItems = document.getElementsByTagName('strong');

for(var i = 0; i<wordItems.length; i++) {
	wordItems[i].addEventListener('mouseover', function(event) {
		if (!isInside(event.relatedTarget, wordItems[i]))
			this.style.color = 'red';
	});
	wordItems[i].addEventListener('mouseout', function(event) {
		if (!isInside(event.relatedTarget, wordItems[i]))
			this.style.color = '';
	});
}

function isInside(node, target) {
	for (; node != null; node = node.parentNode)
		if (node == target) return true;
}