from matplotlib import pyplot as plt
from matplotlib import style
import pandas as pd

style.use("ggplot")

total = pd.read_csv("mandelpoints.csv")
plt.scatter(total.x, total.y, s = 0.001, color = "black")
plt.savefig("graph.png", dpi=1000)