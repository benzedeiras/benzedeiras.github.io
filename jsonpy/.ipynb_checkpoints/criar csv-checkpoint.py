import pandas as pd
import simplejson

dados = pd.read_json("benzedeiras.json")

dados.T.to_csv("dados_benzedeiras.csv")