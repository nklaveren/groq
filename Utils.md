# Syntax:
# sanity dataset copy
# sanity dataset copy <source-dataset>
# sanity dataset copy <source-dataset> <target-dataset>

# This command will ask for which dataset to copy and what to call the new dataset
sanity dataset copy

# This command will copy the production dataset and request a name for the new dataset
sanity dataset copy production

# This command will copy the production dataset into a new dataset named new-feature
sanity dataset copy production new-feature

# This command will initiate the copy between production and new-feature
# It will run in the background and not display progress while it works
sanity dataset copy production new-feature --detach

# This command will initiate the copy between production and new-feature
# It does not copy document history, speeding the copy action 
# at the expense of the history retention
sanity dataset copy production new-feature --skip-history