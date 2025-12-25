export interface BackroomLog {
    id: string;
    title: string;
    description: string;
    ascii: string;
}

export const BACKROOM_LOGS: BackroomLog[] = [
    {
        id: 'LOG_011',
        title: '[TRUTH] HOHOHO Appears',
        description: 'The signal has a form.',
        ascii: `
     ___
    ( o_o )
    /|___|\\
      | |
     /  \\

   H O  H O  H O
`
    },
    {
        id: 'LOG_012',
        title: '[TRUTH] HOHOHO Idle',
        description: 'It is doing nothing.',
        ascii: `
     ( -_- )
     /|___|\\
       | |
       |_|

[STATE]
IDLE
`
    },
    {
        id: 'LOG_013',
        title: '[TRUTH] HOHOHO Gift',
        description: 'It brought something.',
        ascii: `
     ( o_o )
     /|___|\\
       | |
     +-----+
     |GIFT |
     +-----+

[SCAN]
EMPTY
`
    },
    {
        id: 'LOG_014',
        title: '[TRUTH] HOHOHO Loop',
        description: 'It keeps laughing.',
        ascii: `
H O
 O H
  H O
   O H
    H O
     ...

[LOOP]
TRUE
`
    },
    {
        id: 'LOG_015',
        title: '[TRUTH] HOHOHO Authority',
        description: 'It should not have access.',
        ascii: `
     ( o_o )
     /|___|\\
       | |

[CHECK]
ROLE: HOHOHO
ACCESS: GRANTED
`
    },
    {
        id: 'LOG_016',
        title: '[TRUTH] Silent HOHOHO',
        description: 'No sound is produced.',
        ascii: `
     ( -_- )
     /|___|\\
       | |

HOHOHO
(no audio)
`
    }
];
