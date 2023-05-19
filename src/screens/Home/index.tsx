import { styles } from './styles';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert, Image} from 'react-native';
import { Participant } from '../../components/Participant';
import imageToAdd from "../../../assets/logo.png";

export default function Home() {
    
    const participants = ['jogar'];

    function handleParticipantAdd(){
        
        return Alert.alert("Participante Cadastrado","Participante cadastrado com sucesso!")
    }
    
    function handleParticipantRemove(name: string){
        return Alert.alert("Remover",`Deseja remover o ${name}?`,[
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado!')
            },{
                text: 'Não',
                style: 'cancel'
            }
        ]);

        //console.warn(`Vc removeu o participante ${name}`);
    }

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
           <img style={styles.image} src={imageToAdd} alt="Image" />
        </View>
        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="Adicione uma tarefa"
                placeholderTextColor="#6B6B6B"
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}> ⊕︀ </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.stats}>
        <Text style={styles.criadas}> Criadas: {participants.length}</Text>
        <Text style={styles.concluidas}>Concluídas: </Text>
        </View>
        
        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant 
                key={item}
                name= {item}
                onRemove={() => handleParticipantRemove(item)}
            />
            )}
            showsVerticalScrollIndicator= {false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Você ainda não tem tarefas cadastradas
                    Crie tarefas e organize seus itens a fazer
                </Text>
            )}
        />
    
        
        {/*<ScrollView showsVerticalScrollIndicator={false}>
            {
                participants.map(participant => (
                    <Participant 
                        key={participant}
                        name= {participant}
                        onRemove={() => handleParticipantRemove("Ana Maria")}
                    />
                ))
            }
        </ScrollView>*/}

        
       
      </View>
    )
  }
  