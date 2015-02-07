$(function() {
	'use strict';

	var $firstTarget = $('nav'),
		$secondTarget = $('.second-clingy'),
		$fluidParent = $('.content'),
		$sidebar = $('.some-sidebar'),
		matchWidths = function($elem) {
			$elem.width($fluidParent.width());
		};

	$firstTarget.clingify({
		extraClass : 'primaryClingifyElement',
		locked : function() {
			matchWidths($firstTarget);
		},
		resized : function() {
			matchWidths($firstTarget);
		}
	});
	$secondTarget.clingify({
		extraClass : 'secondaryClingifyElement',
		locked : function() {
			matchWidths($secondTarget);
		},
		resized : function() {
			matchWidths($secondTarget);
		}
	});
	$sidebar.clingify({
		extraClass : 'tertiaryClingifyElement',
	});
});