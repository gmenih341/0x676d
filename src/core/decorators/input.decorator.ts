import 'reflect-metadata';

const INPUT_METADATA_KEY = Symbol('INPUT_METADATA_KEY');

const Input = (inputName: string) => {
    return Reflect.metadata(INPUT_METADATA_KEY, inputName);
};

const getInputValu = (target: any) => {
    const 
}