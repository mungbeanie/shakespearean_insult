column1 = [
    'artless', 'bawdy', 'beslubbering', 'bootless', 'churlish', 'cockered', 'clouted', 'craven', 'currish', 'dankish',
    'dissembling',
    'droning', 'errant', 'fawning', 'fobbing', 'froward', 'frothy', 'gleeking', 'goatish', 'gorbellied', 'impertinent',
    'infectious',
    'jarring', 'loggerheaded', 'lumpish', 'mammering', 'mangled', 'mewling', 'paunchy', 'pribbling', 'puking', 'puny',
    'qualling',
    'rank', 'reeky', 'roguish', 'ruttish', 'saucy', 'spleeny', 'spongy', 'surly', 'tottering', 'unmuzzled', 'vain',
    'venomed',
    'villainous', 'warped', 'wayward', 'weedy', 'yeasty'];

column2 = [
    'base-court', 'bat-fowling', 'beef-witted', 'beetle-headed', 'boil-brained', 'clapper-clawed', 'clay-brained',
    'common-kissing',
    'crook-pated', 'dismal-dreaming', 'dizzy-eyed', 'doghearted', 'dread-bolted', 'earth-vexing', 'elf-skinned',
    'fat-kidneyed',
    'fen-sucked', 'flap-mouthed', 'fly-bitten', 'folly-fallen', 'fool-born', 'full-gorged', 'guts-griping',
    'half-faced', 'hasty-witted',
    'hedge-born', 'hell-hated', 'idle-headed', 'ill-breeding', 'ill-nurtured', 'knotty-pated', 'milk-livered',
    'motley-minded',
    'onion-eyed', 'plume-plucked', 'pottle-deep', 'pox-marked', 'reeling-ripe', 'rough-hewn', 'rude-growing',
    'rump-fed', 'shard-borne',
    'sheep-biting', 'spur-galled', 'swag-bellied', 'tardy-gaited', 'tickle-brained', 'toad-spotted', 'unchin-snouted',
    'weather-bitten'];

column3 = [
    'apple-john', 'baggage', 'barnacle', 'bladder', 'boar-pig', 'bugbear', 'bum-bailey', 'canker-blossom', 'clack-dish',
    'clotpole', 'coxcomb',
    'codpiece', 'death-token', 'dewberry', 'flap-dragon', 'flax-wench', 'flirt-gill', 'foot-licker', 'fustilarian',
    'giglet', 'gudgeon', 'haggard',
    'harpy', 'hedge-pig', 'horn-beast', 'hugger-mugger', 'joithead', 'lewdster', 'lout', 'maggot-pie', 'malt-worm',
    'mammet', 'measle', 'minnow', 'miscreant',
    'moldwarp', 'mumble-news', 'nut-hook', 'pigeon-egg', 'pignut', 'puttock', 'pumpion', 'ratsbane', 'scut',
    'skainsmate', 'strumpet', 'varlot', 'vassal',
    'whey-face', 'wagtail'];

function insult_generator(col1, col2, col3) {
    let insult1 = col1[Math.floor(Math.random() * col1.length)];
    insult1 = insult1[0].toUpperCase() + insult1.slice(1); 
    let insult2 = col2[Math.floor(Math.random() * col2.length)];
    let insult3 = col3[Math.floor(Math.random() * col3.length)];
    // alert(insult1 + insult2 + insult3);
    return 'Thou ' + insult1 + ' ' + insult2 + ' ' + insult3 + '!';
}

function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("quote"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}
 

function display() {
    document.getElementById("quote").innerHTML = (insult_generator(column1, column2, column3));
    copyDivToClipboard();
}