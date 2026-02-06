const pluginId = 'example';
let pluginCfg = {
    name: 'Joe Bloggs',
    money: 500,
    pet: 'dog',
    toggle: false
};
let buttonClicked = false;

/**
 * The overlay fires this event when the plugin has been loaded.
 */
window.$eventBus.on(`plugin:loaded:${pluginId}`, (cfg) => {
    initPlugin(cfg);
});

/**
 * The plugin fires this whenever the plugin's config has changed.
 */
window.$eventBus.on(`plugin:updated:${pluginId}`, (cfg) => {
    updatePlugin(cfg);
});

/**
 * The plugin fires this whenever the plugin is unloaded.
 */
window.$eventBus.on(`plugin:unloaded:${pluginId}`, (cfg) => {
    unloadPlugin();
})

/**
 * The plugin fires when a button has been clicked.
 */
window.$eventBus.on(`plugin:button:${pluginId}`, (action) => {
    onButtonClick(action);
})

/**
 * The plugin fires when a button has been enabled in the config.
 */
window.$eventBus.on(`plugin:enabled:${pluginId}`, () => {
    onPluginEnabled();
})

/**
 * The plugin fires when a button has been disabled in the config.
 */
window.$eventBus.on(`plugin:disabled:${pluginId}`, () => {
    onPluginDisabled();
})

/**
 * Handles the initial loading of the plugin.
 * @param {*} cfg The config options.
 */
function initPlugin(cfg) {
    console.log('Example plugin loaded');
    pluginCfg = cfg;
    setTimeout(() => {
        render();
    }, 1000);
}

/**
 * Handles the plugin being updated/reconfigured.
 * 
 * @param {*} cfg The config options.
 */
function updatePlugin(cfg) {
    console.log('Example plugin updated', );
    pluginCfg = cfg;
    render();
}

/**
 * Handle any cleanup after the plugin is unloaded.
 */
function unloadPlugin() {
    console.log('Example plugin unloaded');
    setTimeout(() => {
        render();
    }, 1000);
}

/**
 * Fires when the plugin is enabled.
 */
function onPluginEnabled() {
    console.log('Example plugin enabled');
    setTimeout(() => {
        render();
    }, 1000);
}

/**
 * Fires when the plugin is disabled.
 */
function onPluginDisabled() {
    console.log('Example plugin disabled');
}

/**
 * Handles a button click.
 * 
 * @param {string} action The button action.
 */
function onButtonClick(action) {
    console.log('Example button clicked');
    buttonClicked = true;
    render();
}

function render() {

    console.log('Rendering example plugin');
    console.log(pluginCfg);

    // Find element with id #example
    const el = document.getElementById('example');
    console.log(el);
    if (!el) return;

    el.innerHTML = `<div>
        <div>Money: ${pluginCfg.money.value}</div>
        <div>Name: ${pluginCfg.name.value}</div>
        <div>Pet: ${pluginCfg.pet.value}</div>
        <div>Toggle: ${pluginCfg.toggle.value}</div>
        <div>Button clicked: ${buttonClicked}</div>
    </div>`;

}