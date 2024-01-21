function mmToMeters(aNumber)
{
    return aNumber / 1000;
}

function metersToMm(aNumber)
{
    return aNumber * 1000;
}

const expectedVx = "19407430,3205757";

const e = -1.602e-19;
const m = 9.109e-31; // Electron Mass

const deltaT = 1E-10;

const input =
{
    Uy: 0,
    Ua: 1000,
    B: 30,
    L: 150,
    H: 100,
    d: 10,
    l:  20,
    Vx: 5000000,
};

const L = mmToMeters(input.L);
const Ua = input.Ua;
const Uy = input.Uy;
const B = mmToMeters(input.B);
const H = mmToMeters(input.H); // from annode to cathode
const d = mmToMeters(input.d); // distance between plates
const l = mmToMeters(input.l); // plates Length
const Vx0 = input.Vx;

const eAbs = Math.abs(e);

const Ex = (Ua / H);
const Ax = (eAbs / m) * Ex;

const Vx = Math.sqrt(2 * eAbs * Ua / m);

// let Vx2 = Vx0;

const Vx3 = Math.sqrt((Vx0 * Vx0) + (2 * Ax * H));

// let S = 0;

// let i = 1;

// while (S < H)
// {
//     Vx2 = Vx2 + (Ax * deltaT);
//     const t = (i * deltaT);
//     S = (Vx0 * t) + ((Ax * t * t) / 2);
//     i++;
// }

// for (let i = 1; i < 10; i++)
// {
//     Vx2 = Vx2 + (Ax * deltaT);
//     const t = (i * deltaT);
//     S = (Vx0 * t) + ((Ax * t * t) / 2);
//     console.log(metersToMm(S));
// }

console.log("expected: " + expectedVx);
// console.log("obtained Vx: " + Vx);
// console.log("obtained Vx2: " + Vx2);
console.log("obtained Vx3: " + Vx3);
