import pandas as pd
import simplejson

dados = pd.read_csv("dados_benzedeiras.csv", header=[0], index_col=0)

dados.T.to_json("benzedeiras.json", force_ascii=False, indent=4)