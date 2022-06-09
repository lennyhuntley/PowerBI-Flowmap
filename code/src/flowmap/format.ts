import { MapFormat } from '../lava/bingmap';
import { Setting } from '../pbi/numberFormat';

export class Format {
    legend = {
        show: false,
        position: 'top' as 'top' | 'bot',
        fontSize: 12,
        color: true,
        width: true,
        color_default: false,
        width_default: false,
        color_label: '',
        width_label: ''
    };

    style = {
        style: null as 'straight' | 'flow' | 'arc',//depends
        direction: 'out' as 'in' | 'out',
        limit: 5
    };

    width = {
        customize: true,
        item: 2,
        scale: 'linear' as 'linear' | 'log' | 'none',
        min: 1,
        max: 4,
        unit: null as number//depends
    };

    color = {
        item: { solid: { color: '#808080' } },
        min: { solid: { color: '#99e3dd' } },
        max: { solid: { color: '#015c55' } },
        autofill: false,
        customize: true
    };

    advance = {
        cache: true,
        relocate: false,
        located: true,
        unlocated: true
    };

    mapControl = MapFormat.control(new MapFormat(), { autoFit: true });

    mapElement = MapFormat.element(new MapFormat(), {});

    valueFormat = new ValueFormat();

    bubble = {
        for: null as 'none' | 'origin' | 'dest' | 'both',//depends
        slice: false as boolean,//depends
        bubbleColor: { solid: { color: '#FF3939' } },
        scale: 20,
        label: 'none' as 'none' | 'all' | 'manual' | 'hide',
        labelOpacity: 50,
        labelColor: { solid: { color: '#888888' } }
    };
}

class ValueFormat extends Setting {
    sort = 'des' as 'asc' | 'des';
    top = 10;
}