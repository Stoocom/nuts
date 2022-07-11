import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    titleText: {
        color: '#3E4958',
        fontFamily: 'Inter-Bold',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 28,
        textAlign: 'center'
    },
    listIcons: {
        marginTop: 25,
        width: 42,
        height: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textFirstNote: {
        fontFamily: 'Inter-Regular',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 15,
        color: '#384452',
        textAlign: 'center',
        lineHeight: 25,
    },
    textSecondNote: {
        fontFamily: 'Inter-Regular',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            color: '#97ADB6',
            marginTop: 20,
            textAlign: 'center',
            lineHeight: 25,
    },
    headerTitle: {
        fontSize: 20,
            fontFamily: "Inter-Regular",
            lineHeight: 20 * 1.4,
            textAlign: 'center',
    },
    title: {
        fontSize: 20,
            lineHeight: 20 * 1.4,
            marginTop: 50,
            marginBottom: 10,
            marginHorizontal: 20,
    },
    content: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    phoneNumberText: {
        fontSize: 18,
    },
    otpContainer: {
        width: 160,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    otpBox: {
        width: 40,
        // borderBottomColor: '#48C0F3',
        // borderBottomWidth: 2
    },
    otpText: {
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: 36,
        color: '#48C0F3',
        paddingVertical: 7,
    },
    wrongText: {
        marginTop: 10,
        fontFamily: 'Inter-Regular',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 12,
        color: '#F34848',
        textAlign: 'center'
    },
    againText: {
        marginTop: 50,
        fontFamily: 'Inter-Regular',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 15,
        color: '#48C0F3',
        lineHeight: 16,
        textAlign: 'center'
    },
    enter: {
        width: 312,
        height: 60,
        backgroundColor: '#48C0F3',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontFamily: 'Inter-Bold',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 28,
    },
    enterDisabled: {
        backgroundColor: '#E1E3E6',
    },
}));

export interface CodeCheckData {
    phoneNumber: string,
    handleCodeValidated: (otp:string) => void,
    setIsConnectedTelegramm: (bool:boolean) => void,
}

export const CodeCheck = () => {
    const { otpContainer, phoneNumberText, title, headerTitle, content, textSecondNote, titleText, listIcons, againText, wrongText, textFirstNote, otpText, otpBox, enter, text, enterDisabled } = useStyles();

    const firstInput = useRef<HTMLInputElement>(null);
    const secondInput = useRef<HTMLInputElement>(null);
    const thirdInput = useRef<HTMLInputElement>(null);
    const fourthInput = useRef<HTMLInputElement>(null);
    const [otp, setOtp] = useState<any>({1: '', 2: '', 3: '', 4: ''});

    const [status, setStatus] = useState<boolean>(false);
    const [code, setCode] = useState<boolean>(true);
    const [openTimer, setOpenTimer] = useState<boolean>(false);


    const validateCheckCode = async (code: number) => {
    }

    useEffect(() => {
        firstInput.current?.focus()
    }, []);

    return (
        <Box style={{width: '100%', alignItems: 'center'}}>
            <Box>
                {/*<Text style={styles.titleText}>Подтвердите номер</Text>*/}
                <TextField className={titleText}>Подтвердите{'\n'}указанный номер</TextField>
                </Box>
                {/*<Text style={styles.textSecondNote}>Код был выслан на номер{'\n'}{phoneNumber}. Введите его здесь.</Text>*/}
                <TextField className={textSecondNote}>
                    Для подтверждения мы совершим{'\n'}звонок-сброс. Введите последние 4 цифры{'\n'}номера, с которого вам позвонили
                </TextField>
                <Box className={otpContainer}>
                    <Box className={otpBox}>
                        <input
                            className={otpText}
                            type="number"
                            maxLength={1}
                            placeholder={'0'}
                            ref={firstInput}
                            onChange={text => {
                                setOtp({...otp, 1: text});
                                text && secondInput.current?.focus();
                            }}
                        />
                    </Box>
                    <Box className={otpBox}>
                        <input
                            className={otpText}
                            type="number"
                            maxLength={1}
                            placeholder={'0'}
                            ref={secondInput}
                            onChange={text => {
                                setOtp({...otp, 2: text});
                                text ? thirdInput.current?.focus() : firstInput.current?.focus();
                            }}
                        />
                    </Box>
                    <Box className={otpBox}>
                        <input
                            className={otpText}
                            type="number"
                            maxLength={1}
                            placeholder={'0'}
                            ref={thirdInput}
                            onChange={text => {
                                setOtp({...otp, 3: text});
                                text ? fourthInput.current?.focus() : secondInput.current?.focus();
                            }}
                        />
                    </Box>
                    <Box className={otpBox}>
                        <input
                            className={otpText}
                            type="number"
                            maxLength={1}
                            placeholder={'0'}
                            ref={fourthInput}
                            onChange={text => {
                                setOtp({...otp, 4: text});
                                if (text) {21
                                    validateCheckCode(+(otp['1']+otp['2']+otp['3']+text));
                                } else {
                                    thirdInput.current?.focus();
                                }
                            }}
                        />
                    </Box>
                </Box>
                <Button
                    className={enter}
                    disabled={openTimer}
                    onClick={() => {
                        setOpenTimer(true);
                        //sendCheckCode();
                    }}
                >
                    <TextField className={text}>Запросить звонок</TextField>
                </Button>
                {!code ? <TextField className={wrongText}>Неверный код. Попробуйте еще раз</TextField> : null}

            </Box>
        );
}
