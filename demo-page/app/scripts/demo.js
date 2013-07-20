$(function() {
	'use strict';

	var $firstTarget = $('.nav-persistent'),
		$secondTarget = $('.second-clingy'),
		$fluidParent = $('.content'),
		matchWidths = function($elem) {
			$elem.width($fluidParent.width());
		};

	$firstTarget.clingify({
		breakpoint : 600,
		extraClass : 'primaryClingifyElement',
		locked : function() {
			matchWidths($firstTarget);
		},
		resized : function() {
			matchWidths($firstTarget);
		}
	});
	$secondTarget.clingify({
		breakpoint : 600,
		extraClass : 'secondaryClingifyElement',
		locked : function() {
			matchWidths($secondTarget);
		},
		resized : function() {
			matchWidths($secondTarget);
		}
	});
});