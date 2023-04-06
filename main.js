function toggle() {
	var blur = document.getElementById('blur');
	blur.classList.toggle('active');
	var popup = document.getElementById('popup');
	popup.classList.toggle('active');
}

let incomeClick = 1;
let shopLevel = 0;
let uangSkeleton = 0;
let clickerVal = 100;
let upShopVal = 50;
let autoWaktu = 1000;
let hargaGems = 50;
let ketGems = 1;
let lvlGems = 1;
let hargaScroll = 80;
let ketScroll = 2;
let lvlScroll = 1;
let hargaPotion = 100;
let ketPotion = 3;
let lvlPotion = 1;
let audioGet = $('#moneySound')[0];
let audioOut = $('#BuySound')[0];
let bgmusic = $('#bgmusic')[0];

bgmusic.play();

$('.taptap').click(function () {
	uangSkeleton = uangSkeleton + incomeClick;
	$('.uangVal').text('$' + uangSkeleton);
	audioGet.play();
	console.log(uangSkeleton);
});

$('.btnShop').click(function beliCabang() {
	if (uangSkeleton < upShopVal) {
		alert('Transaction failed. Not enough money. Upgrade Shop costs $' + upShopVal);
	} else {
		uangSkeleton = uangSkeleton - upShopVal;
		$('.uangVal').text('$' + uangSkeleton);
		upShopVal = upShopVal * 2;
		iconCabang = $('<i/>', {
			class: 'fa-solid fa-shop me-2',
		});
		$('.btnShop').empty();
		$('.btnShop').append(iconCabang);
		$(iconCabang).after('Upgrade Shop');

		shopLevel = shopLevel + 1;
		incomeClick = incomeClick + 1;
		$('.shopVal').text(shopLevel);
		$('.incomeGold').text('Income Gold = $' + incomeClick);
		audioOut.play();
	}
});

$('.btnAuto').click(() => {
	if (uangSkeleton < clickerVal) {
		alert('Transaction failed. Not enough money. Auto Clicker costs $100');
	} else {
		uangSkeleton = uangSkeleton - clickerVal;
		$('.uangVal').text('$' + uangSkeleton);

		$('.btnAuto').empty();
		$('.btnAuto').text('Auto Clicker Sold Out');
		$('.btnAuto').attr('disabled', true);

		setInterval(autoNambah, autoWaktu);

		function autoNambah() {
			uangSkeleton = uangSkeleton + incomeClick;
			$('.uangVal').text('$' + uangSkeleton);
		}
		audioOut.play();
	}
});

$('.btnGems').click(() => {
	if (uangSkeleton < hargaGems) {
		alert('Transaction failed. Not enough money.');
	} else {
		uangSkeleton = uangSkeleton - hargaGems;
		incomeClick = incomeClick + ketGems;
		ketGems = ketGems + 1;
		lvlGems = lvlGems + 1;
		hargaGems = hargaGems + 10;
		$('.uangVal').text('$' + uangSkeleton);
		if (lvlGems > 3) {
			$('.btnGems').empty();
			$('.btnGems').addClass('btnUpgrade btnGems mb-2');
			$('.ketGems').remove();
			$('.btnGems').text('Max Level');
			$('.btnGems').attr('disabled', true);
		} else {
			$('.btnUpGems').text('Level ' + lvlGems + ' - Cost $' + hargaGems);
			$('.ketGems').text('Income Gold +$' + ketGems);
		}
		$('.incomeGold').text('Income Gold = $' + incomeClick);
	}
});

$('.btnScroll').click(() => {
	if (uangSkeleton < hargaScroll) {
		alert('Transaction failed. Not enough money.');
	} else {
		uangSkeleton = uangSkeleton - hargaScroll;
		incomeClick = incomeClick + ketScroll;
		ketScroll = ketScroll + 1;
		lvlScroll = lvlScroll + 1;
		hargaScroll = hargaScroll + 20;
		$('.uangVal').text('$' + uangSkeleton);
		if (lvlScroll > 3) {
			$('.btnScroll').empty();
			$('.btnScroll').addClass('btnUpgrade btnScroll mb-2');
			$('.ketScroll').remove();
			$('.btnScroll').text('Max Level');
			$('.btnScroll').attr('disabled', true);
		} else {
			$('.btnUpScroll').text('Level ' + lvlScroll + ' - Cost $' + hargaScroll);
			$('.ketScroll').text('Income Gold +$' + ketScroll);
		}
		$('.incomeGold').text('Income Gold = $' + incomeClick);
	}
});

$('.btnPotion').click(() => {
	if (uangSkeleton < hargaPotion) {
		alert('Transaction failed. Not enough money.');
	} else {
		uangSkeleton = uangSkeleton - hargaPotion;
		incomeClick = incomeClick + ketPotion;
		ketPotion = ketPotion + 1;
		lvlPotion = lvlPotion + 1;
		hargaPotion = hargaPotion + 30;
		$('.uangVal').text('$' + uangSkeleton);
		if (lvlPotion > 3) {
			$('.btnPotion').empty();
			$('.btnPotion').addClass('btnUpgrade btnPotion mb-2');
			$('.ketPotion').remove();
			$('.btnPotion').text('Max Level');
			$('.btnPotion').attr('disabled', true);
		} else {
			$('.btnUpPotion').text(
				'Level - ' + lvlPotion + ' - Cost $' + hargaPotion
			);
			$('.ketPotion').text('Income Gold +$' + ketPotion);
		}
		$('.incomeGold').text('Income Gold = $' + incomeClick);
	}
});
