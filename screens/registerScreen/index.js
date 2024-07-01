import React from 'react';
import { Alert, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MobileInputComponent } from './components/mobileInput';
import { TextBox } from './components/textBox';
import { styles } from './style';

const RegisterScreen = () => {
    const [state, setState] = React.useState({
        name: "",
        address: "",
        mail_id: "",
        mobile_no: ""
    })
    const updateState = (k, v) => {
        setState({ ...state, [k]: v })
    }
    const onRegister = () =>{
        if(state?.name?.length>0&&state?.mobile_no?.length>0&&state?.mail_id?.length>0&&state?.address?.length>0){
            Alert.alert('Registered Successfully!');
            setState({
                name: "",
                address: "",
                mail_id: "",
                mobile_no: ""
            })
        }
        else{
            Alert.alert('Please fill all fields');  
        }
        
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.imgContainer}>
                        <Image source={require('../../assets/images/purchase.png')} />
                        <Text style={styles.subTitle}>Earn loyalty for every purchase</Text>
                    </View>
                    <View style={styles.profileBox}>
                        <View>
                            <Text style={styles.hdrText}>Profile Details</Text>
                            <Text style={styles.subHdrText}>Please provide your basic details</Text>
                            <Text style={styles.subHdrText2}>to proceed further</Text>
                        </View>
                        <View style={styles.inputdiv}>
                            <TextBox
                                value={state?.name}
                                placeholder="Name"
                                onChange={(e) => updateState("name", e)}
                            />
                            <MobileInputComponent
                                value={state?.mobile_no}
                                placeholder="Mobile No"
                                onChange={(e) => updateState("mobile_no", e)}
                            />
                            <TextBox
                                value={state?.mail_id}
                                placeholder="Email"
                                onChange={(e) => updateState("mail_id", e)}
                            />
                            <TextBox
                                value={state?.address}
                                placeholder="Address"
                                onChange={(e) => updateState("address", e)}
                                multiline={true}
                                numberOfLines={4}
                            />
                        </View>
                    </View>
                </View>

            </ScrollView>
            <View style={styles.bottomBtn}>
            <TouchableOpacity onPress={onRegister}>
                <View style={{
                    backgroundColor: "#30AF89",
                    padding: 16,
                    borderRadius: 8,

                }}>
                    <Text style={styles.registerBtn}>Register</Text>
                </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default RegisterScreen





