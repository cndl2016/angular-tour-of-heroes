"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: '剑圣', strength: '20', agility: '26', intelligence: '14', memo: '描述，可修改' },
            { id: 2, name: '敌法师', strength: '22', agility: '22', intelligence: '15', memo: '描述，可修改' },
            { id: 3, name: '宙斯', strength: '19', agility: '11', intelligence: '20', memo: '描述，可修改' },
            { id: 4, name: '沙王', strength: '22', agility: '19', intelligence: '16', memo: '描述，可修改' },
            { id: 5, name: '幻影长矛手', strength: '21', agility: '29', intelligence: '21', memo: '描述，可修改' },
            { id: 6, name: '水晶室女', strength: '16', agility: '16', intelligence: '16', memo: '描述，可修改' },
            { id: 7, name: '食尸鬼', strength: '25', agility: '18', intelligence: '15', memo: '描述，可修改' },
            { id: 8, name: '育母蜘蛛', strength: '17', agility: '18', intelligence: '18', memo: '描述，可修改' },
            { id: 9, name: '美杜莎', strength: '14', agility: '20', intelligence: '19', memo: '描述，可修改' },
            { id: 10, name: '祈求者', strength: '17', agility: '14', intelligence: '16', memo: '描述，可修改' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map