import logoJabar from "../logo/logoJabar.png"

export class LogoJabarControl {
    onAdd(map) {
        this._map = map;
        this._container = document.createElement('div');
        this._container.className = 'maplibregl-ctrl';
        this._container.innerHTML = `
            <img
                src="${logoJabar}"
                alt="Logo Jawa Barat"
                style="width: 50px"
            >
        `
        return this._container;
    }

    onRemove() {
        this._container.remove();
        this._map = undefined;
    }
}