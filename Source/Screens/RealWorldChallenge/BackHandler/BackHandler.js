import { View, SafeAreaView, StyleSheet, Image, Text, ActivityIndicator, BackHandler, Modal, TextInput, Alert } from 'react-native';

BackHandler For Android Device Can not Back while we click on already shown buttton on device.

With Functional Component-->

  useEffect(() => {
        const backAction = () => {
            console.log('You can not go Back');

            return true;
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, [])

With Class Component-->

 backAction = () => {
        console.log('You can not go Back');
        return true;
    };

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

