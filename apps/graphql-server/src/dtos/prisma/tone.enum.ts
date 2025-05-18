import { registerEnumType } from '@nestjs/graphql';

export enum Tone {
    DRAMATIC = "DRAMATIC",
    IRONIC = "IRONIC",
    CRINGE = "CRINGE",
    CLASSY = "CLASSY",
    TOUCHING = "TOUCHING",
    ABSURD = "ABSURD",
    PASSIVE_AGGRESSIVE = "PASSIVE_AGGRESSIVE",
    HONEST = "HONEST"
}


registerEnumType(Tone, { name: 'Tone', description: undefined })
