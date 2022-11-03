const { Extension, type, api } = require('clipcc-extension');

class MyExtension extends Extension {
    onInit() {
        api.addCategory({
            categoryId: 'awablack.fullscreen.category',
            messageId: 'awablack.fullscreen.category',
            color: '#4cbfe6'
        });
        api.addBlock({
            opcode: 'awablack.fullscreen.isfullscreen',
            type: type.BlockType.BOOLEAN,
            messageId: 'awablack.fullscreen.isfullscreen',
            categoryId: 'awablack.fullscreen.category',
            function: ()=> api.getGuiInstance().props.isFullScreen
        });
    }
    onUninit() {
        api.removeCategory('awablack.fullscreen.category');
    }
}

module.exports = MyExtension;
