// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

ServerEvents.recipes(event => {
	event.replaceInput(
		{ id: 'pedestals:pedestals/pedestal_stone' },
		'minecraft:stone_slab',
		'minecraft:quartz_slab'
	)
})

ServerEvents.recipes(event => {
	event.replaceInput(
		{ id: 'pedestals:pedestals/pedestal_stone' },
		'minecraft:stone',
		'minecraft:quartz_block'
	)
})

ServerEvents.recipes(event => {
	event.remove({ 
		output: 'minecraft:beacon'
	 })
})

ServerEvents.recipes(event => {
	event.remove({ 
		output: 'minecraft:conduit'
	})
})

ServerEvents.recipes(event => {
	event.remove({ 
		id: 'ars_nouveau:novice_spell_book'
	 })
})

ServerEvents.recipes(event => {
	event.remove({ 
		id: 'ars_nouveau:apprentice_spell_book_upgrade' 
	})
})

ServerEvents.recipes(event => {
	event.remove({
		id: 'ars_nouveau:archmage_spell_book_upgrade'
	})
})

ServerEvents.recipes(event => {
	event.remove({
		id: 'ars_instrumentum:archmage_spell_book_upgrade_alternate'
	})
})

ServerEvents.recipes(event => {
	event.remove({
		id: 'bhc:god_apple'
	})
})

ServerEvents.recipes(event => {
	event.remove({
		id: 'apotheosis:enchanted_golden_apple'
	})
})

ServerEvents.recipes(event => {
	event.remove({
		id: 'bhc:relic_apple'
	})
})