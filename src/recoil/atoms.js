import { atom, selector } from 'recoil';

const localStorageEffect = key => ({setSelf, onSet}) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
        setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
        if (newValue instanceof DefaultValue) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(newValue));
        }
    });
}

export const welcomeAnimationAtom = atom({
    key: "welcomeAnimationState",
    default: {
			"basicAnimation" : false,
			"detailedAnimation" : true,
		}
})

export const welcomeAnimationSelector = selector({
    key: 'welcomeAnimationSelector',
    get: ({get}) => get(welcomeAnimationAtom),
		set: ({set}, newValue) => {
			set(welcomeAnimationAtom, newValue)
		}
})