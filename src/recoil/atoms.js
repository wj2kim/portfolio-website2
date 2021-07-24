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

export const nameBannerShownState = atom({
    key: "isNameBannerShown",
    default: false,
})

// export const tester = selector({
//     key: 'welcomeShown',
//     get: ({get}) => {
//         return get(localStorage.getItem('isWelcomShown'));
//     }
// })